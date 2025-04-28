document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả các tab và view
    const tabs = document.querySelectorAll('.tab-item');
    const views = document.querySelectorAll('.tab-view');

    // Hàm để set active tab và view
    const setActive = (tabId) => {
        // Xóa trạng thái active của tất cả tab và view
        tabs.forEach(tab => tab.classList.remove('active'));
        views.forEach(view => view.classList.remove('active'));

        // Set active cho tab và view tương ứng
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.querySelector(`#${tabId}`).classList.add('active');
    };

    // Khi click vào tab
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            setActive(tabId);
        });
    });

    // Active tab và view đầu tiên khi load trang
    setActive(tabs[0].getAttribute('data-tab'));
});