import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrrwbMseOJ0e9MQf45g7CS96QvrMjaF-E",
  authDomain: "patuli-43791.firebaseapp.com",
  projectId: "patuli-43791",
  storageBucket: "patuli-43791.firebasestorage.app",
  messagingSenderId: "862682458439",
  appId: "1:862682458439:web:a90ee40bf597c40ae18462"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let isSyncing = false;
let cloudLoaded = false;

const SYNC_KEYS = [
    'products', 'inventory', 'categories', 'orders', 'expenses', 
    'b2b_customers', 'b2b_records', 'customerOrders', 'recipes',
    'adminPassword', 'modulesPassword', 'inventoryPassword', 'analyticsPassword',
    'financePassword', 'recipePassword', 'receivablesPassword', 'expensesPassword',
    'personnelPassword', 'b2bPassword', 'personnel_records', 'settings',
    'receivables', 'suppliers', 'invCategories', 'financeDeletePassword', 'siteAccessPassword', 'inventoryRequests'
];

function triggerRender() {
    if(window.renderInventory) window.renderInventory();
    if(window.renderFinance) window.renderFinance();
    if(window.renderOrders) window.renderOrders();
    if(window.renderCustomerOrders) window.renderCustomerOrders();
    if(window.renderAnalyticsFloor) window.renderAnalyticsFloor();
    if(window.renderReceivables) window.renderReceivables();
    if(window.renderExpenses) window.renderExpenses();
    if(window.renderB2BAgenda) window.renderB2BAgenda();
    if(window.renderRecipeFloor) window.renderRecipeFloor();
    if(window.renderPersonnelRecords) window.renderPersonnelRecords();
}

function initializeSync() {
    setTimeout(() => {
        cloudLoaded = true;
    }, 3000);

    SYNC_KEYS.forEach(key => {
        const docRef = doc(db, "patuli_db", key);
        onSnapshot(docRef, (snapshot) => {
            if (!snapshot.exists()) return;
            const cloudVal = snapshot.data().value;
            if (cloudVal !== undefined && cloudVal !== null && localStorage.getItem(key) !== cloudVal) {
                isSyncing = true;
                originalSetItem.call(localStorage, key, cloudVal);
                isSyncing = false;
                triggerRender();
            }
        });
    });
}

const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
    originalSetItem.apply(this, arguments);
    if (SYNC_KEYS.includes(key) && !isSyncing && cloudLoaded) {
        setDoc(doc(db, "patuli_db", key), { value: value }, { merge: true })
            .catch(e => console.error(e));
    }
};

const originalRemoveItem = localStorage.removeItem;
localStorage.removeItem = function(key) {
    originalRemoveItem.apply(this, arguments);
    if (SYNC_KEYS.includes(key) && !isSyncing && cloudLoaded) {
        setDoc(doc(db, "patuli_db", key), { value: null }, { merge: true })
            .catch(e => console.error(e));
    }
};

initializeSync();

window.forceCloudSync = () => {
    SYNC_KEYS.forEach(k => {
        let v = localStorage.getItem(k);
        if (v) setDoc(doc(db, "patuli_db", k), { value: v }, { merge: true });
    });
    alert("Tüm veriler buluta zorunlu olarak yüklendi!");
};
