# Yamm Refund Orders Dashboard

Task for a Next.js dashboard for managing refund orders for Yamm.sa. It features a navigation sidebar, a paginated table, and actions for each order, such as status toggling and decision updates.

## 📸 Screenshots

![Dashboard Overview](\public\dashboard.png)
*Main dashboard view showing refund orders table*

![Order Info](\public\order.png)
*Order details page*

## 🚀 Features
- **Paginated Table**: Displays refund orders with up to 15 orders per page.
- **Actions**: Change decision status, toggle active/inactive state, and view order details.
- **Reusable Components**: OrdersTable is designed to be reused across the app.
- **Live Updates**: Changes are reflected instantly without page reload.
- **Responsive Design**: Optimized for desktop and mobile.
- **Mock API**: Uses JSON Server for local data simulation.

## 🛠️ Tech Stack
- **Next.js** (App Router)
- **React Query** (Data fetching & caching)
- **Tailwind CSS** (Styling)
- **Context API** (State management)
- **JSON Server** (Mock API)

## 📦 Installation

1. **Clone the repository**  
   ```sh
   git clone https://github.com/yourusername/refund-dashboard.git
   cd refund-dashboard
   ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Start the mock API server**
    ```sh
    npm run json-server
    ```
    This will serve the refund orders data at `http://localhost:3001/refunds`.

4. **Run the Next.js app**
    ```sh
    npm run dev
    ```
    Open `http://localhost:3000` in your browser.
