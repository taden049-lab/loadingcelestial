/* CSS Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Основные стили */
body {
    font-family: 'Roboto Condensed', 'Arial', sans-serif;
    background: #0a0a0a;
    color: #e0d3b8;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

/* Фоновые слои */
.background-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://i.imgur.com/yVnzrQb.jpg') no-repeat center center;
    background-size: cover;
    z-index: -3;
}

.overlay-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 15, 5, 0.85);
    z-index: -2;
}

.scanlines {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.1) 50%
    );
    background-size: 100% 4px;
    z-index: -1;
    pointer-events: none;
}

.film-grain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
    z-index: -1;
    pointer-events: none;
    opacity: 0.3;
}

/* Навигация */
.military-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(20, 25, 15, 0.9);
    border-bottom: 2px solid #5d4a2e;
    padding: 10px 20px;
    height: 60px;
}

.nav-left, .nav-right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.faction-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #c9b18b;
    font-weight: bold;
    font-size: 1.1rem;
}

.faction-badge i {
    color: #d4af37;
}

.server-status {
    display: flex;
    align-items: center;
    gap: 8px;
}

.status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #2ecc71;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
}

.nav-center {
    flex-grow: 1;
    text-align: center;
    color: #ffcc5c;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.nav-info {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #b8a27a;
}

/* Основной контент */
.main-container {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
}

.content-wrapper {
    display: flex;
    flex: 1;
    padding: 20px;
    gap: 20px;
}

.panel-military {
    background: rgba(30, 35, 25, 0.8);
    border: 2px solid #5d4a2e;
    border-radius: 3px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

/* Левая панель */
.left-panel {
    flex: 1;
    min-width: 300px;
}

.panel-header {
    color: #d4af37;
    border-bottom: 1px solid #5d4a2e;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-family: 'Oswald', sans-serif;
}

.panel-header h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.4rem;
}

.server-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;
    background: rgba(40, 45, 35, 0.5);
    border-left: 4px solid #8b7355;
}

.info-icon {
    color: #d4af37;
    font-size: 1.2rem;
    min-width: 30px;
}

.info-content {
    display: flex;
    flex-direction: column;
}

.info-label {
    color: #aaa;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.info-value {
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 5px;
}

.panel-divider {
    text-align: center;
    margin: 25px 0;
    position: relative;
}

.panel-divider span {
    background: rgba(30, 35, 25, 0.9);
    padding: 0 15px;
    color: #c9b18b;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.panel-divider:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #5d4a2e;
    z-index: -1;
}

.battle-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.stat {
    text-align: center;
    padding: 15px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    flex: 1;
    margin: 0 5px;
}

.stat-value {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: #d4af37;
    font-family: 'Oswald', sans-serif;
}

.stat-label {
    display: block;
    font-size: 0.8rem;
    color: #aaa;
    margin-top: 5px;
}

/* Центральная панель */
.center-panel {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.welcome-title {
    text-align: center;
    padding: 20px;
    background: rgba(20, 25, 15, 0.8);
    border: 2px solid #8b7355;
}

.welcome-title h2 {
    color: #d4af37;
    font-family: 'Oswald', sans-serif;
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.welcome-title h1 {
    color: #c9b18b;
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    font-weight: normal;
}

/* Прогресс загрузки */
.loading-section {
    min-height: 250px;
}

.loading-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.loading-status {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffcc5c;
}

.status-dot {
    width: 12px;
    height: 12px;
    background: #ffcc5c;
    border-radius: 50%;
    animation: pulse 1.5s infinite;
}

.loading-progress {
    margin: 30px 0;
}

.progress-container {
    position: relative;
}

.progress-bar {
    width: 100%;
    height: 30px;
    background: rgba(40, 45, 35, 0.7);
    border: 2px solid #5d4a2e;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #3a2c1a, #8b7355, #c9b18b);
    transition: width 0.5s ease;
}

.progress-stripes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(255, 255, 255, 0.05) 10px,
        rgba(255, 255, 255, 0.05) 20px
    );
}

.progress-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: #b8a27a;
    font-size: 0.9rem;
}

.loading-tips {
    margin-top: 25px;
    padding: 15px;
    background: rgba(58, 44, 26, 0.3);
    border-left: 4px solid #d4af37;
}

.loading-tips h4 {
    color: #ffcc5c;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

/* Новости */
.news-section {
    flex-grow: 1;
}

.news-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.news-time {
    color: #c9b18b;
    font-weight: bold;
}

.news-ticker {
    height: 180px;
    overflow-y: auto;
    padding: 15px;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #3a2c1a;
}

.news-item {
    padding: 10px 0;
    border-bottom: 1px dashed #5d4a2e;
    display: flex;
    gap: 15px;
}

.news-item:last-child {
    border-bottom: none;
}

.news-time {
    color: #d4af37;
    min-width: 50px;
    font-weight: bold;
}

.news-text {
    color: #e0d3b8;
}

/* Правая панель */
.right-panel {
    flex: 1;
    min-width: 300px;
}

.factions {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.faction {
    padding: 15px;
    border-radius: 3px;
}

.faction-allies {
    background: rgba(42, 92, 139, 0.2);
    border-left: 5px solid #2a5c8b;
}

.faction-axis {
    background: rgba(139, 42, 42, 0.2);
    border-left: 5px solid #8b2a2a;
}

.faction-civilian {
    background: rgba(42, 139, 92, 0.2);
    border-left: 5px solid #2a8b5c;
}

.faction-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    color: #fff;
}

.faction-header h4 {
    font-size: 1.2rem;
}

.faction-list {
    list-style: none;
    padding-left: 10px;
}

.faction-list li {
    padding: 5px 0;
    color: #c0b090;
    position: relative;
    padding-left: 20px;
}

.faction-list li:before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #d4af37;
}

.rules {
    margin-top: 20px;
}

.rule-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    color: #c0b090;
    border-bottom: 1px solid rgba(93, 74, 46, 0.3);
}

.rule-item:last-child {
    border-bottom: none;
}

/* Футер */
.military-footer {
    background: rgba(20, 25, 15, 0.95);
    border-top: 2px solid #5d4a2e;
    padding: 12px 20px;
    height: 40px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: #888;
    font-size: 0.85rem;
}

.footer-left, .footer-right {
    display: flex;
    align-items: center;
    gap: 10px;
}

.footer-center {
    text-align: center;
}

.audio-control {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 5px 10px;
    background: rgba(58, 44, 26, 0.5);
    border-radius: 3px;
    border: 1px solid #8b7355;
    transition: background 0.3s;
}

.audio-control:hover {
    background: rgba(88, 64, 36, 0.7);
}

/* Скроллбар */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #2a2a2a;
}

::-webkit-scrollbar-thumb {
    background: #5d4a2e;
    border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
    background: #8b7355;
}

/* Адаптивность */
@media (max-width: 1200px) {
    .content-wrapper {
        flex-direction: column;
    }
    
    .left-panel, .right-panel, .center-panel {
        min-width: 100%;
    }
    
    .battle-stats {
        flex-wrap: wrap;
    }
    
    .stat {
        flex: 1 0 calc(33.333% - 10px);
        margin-bottom: 10px;
    }
}

.preload-hide {
    opacity: 0;
}

.preload-show {
    opacity: 1;
    transition: opacity 0.5s ease;
}
