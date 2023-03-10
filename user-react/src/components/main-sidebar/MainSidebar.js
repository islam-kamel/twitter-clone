import "./twitter.main.css"

export default function MainSidebar() {
    return (
        <aside className="position-sticky top-0 h-100">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            {/* "هذا حل مؤقت" التعليق العلوي من أجل إيقاف تحذير eslint من استخدام a تاج دون وضع رابط صالح */}
            <div className="tw-navbar">
                <div className="tw-navbar-brand">
                    <a href="#" className="tw-navbar-link text-primary">
                        <i className="bi bi-twitter"></i>
                    </a>
                </div>
                <div className="tw-navbar-item">
                    <a href="#" className="tw-navbar-link">
                        <i className="bi bi-house-heart-fill"></i>
                        <span className="tw-navbar-text">Home</span>
                    </a>
                </div>
                <div className="tw-navbar-item">
                    <a href="#" className="tw-navbar-link">
                        <i className="bi bi-search"></i>
                        <span className="tw-navbar-text">Explore</span>
                    </a>
                </div>
                <div className="tw-navbar-item">
                    <a href="#" className="tw-navbar-link">
                        <i className="bi bi-bell"></i>
                        <span className="tw-navbar-text">Notifications</span>
                    </a>
                </div>
                <div className="tw-navbar-item">
                    <a href="#" className="tw-navbar-link">
                        <i className="bi bi-envelope"></i>
                        <span className="tw-navbar-text">Messages</span>
                    </a>
                </div>
                <div className="tw-navbar-item">
                    <a href="#" className="tw-navbar-link">
                        <i className="bi bi-bookmark"></i>
                        <span className="tw-navbar-text">Bookmarks</span>
                    </a>
                </div>
                <div className="tw-navbar-item">
                    <a href="#" className="tw-navbar-link">
                        <i className="bi bi-journals"></i>
                        <span className="tw-navbar-text">Lists</span>
                    </a>
                </div>
                <div className="tw-navbar-item">
                    <a href="#" className="tw-navbar-link">
                        <i className="bi bi-person"></i>
                        <span className="tw-navbar-text">Profile</span>
                    </a>
                </div>
                <div className="tw-navbar-item">
                    <a href="#" className="tw-navbar-link">
                        <i className="bi bi-three-dots"></i>
                        <span className="tw-navbar-text">More</span>
                    </a>
                </div>
            </div>
        </aside>
    );
}