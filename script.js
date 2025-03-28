document.addEventListener('DOMContentLoaded', function() {
    // 페이지 로드 시 애니메이션 효과
    const elements = document.querySelectorAll('.header, .intro-message, .survey-container, .encouragement-card');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        setTimeout(() => {
            element.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // 모바일 대응을 위한 iframe 크기 조정
    function adjustIframeHeight() {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            const width = iframe.offsetWidth;
            const height = (width * 1.2); // 더 여유있는 비율로 수정
            iframe.style.height = `${height}px`;
        }
    }

    // 창 크기 변경 시 iframe 크기 조정
    window.addEventListener('resize', adjustIframeHeight);
    adjustIframeHeight();

    // 격려 메시지 카드에 마우스 오버 시 추가 효과
    const cards = document.querySelectorAll('.encouragement-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-8px) rotate(1deg)';
            this.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.08)';
            const icon = this.querySelector('.card-icon');
            if(icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0) rotate(0)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.08)';
            const icon = this.querySelector('.card-icon');
            if(icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });

    // 격려 메시지 랜덤 생성
    const encouragingMessages = [
        "오늘 수학 시간, 네 생각을 솔직하게 적어보자!",
        "어려웠던 부분도 솔직히 적으면 다음엔 더 쉬워질거야!",
        "네 생각과 느낌이 선생님께는 정말 소중해!",
        "꾸준한 기록이 나를 성장시켜요!",
        "스스로를 돌아보는 시간, 정말 멋진 일이야!",
        "작은 도전에도 큰 박수를 보내요!",
        "매일 한 걸음씩, 너의 성장을 응원해!",
        "네 마음을 표현하는 건 용기있는 행동이야!",
    ];

    // 랜덤 격려 메시지 표시 함수
    function showRandomMessage() {
        const random = Math.floor(Math.random() * encouragingMessages.length);
        const message = document.createElement('div');
        message.className = 'floating-message';
        message.textContent = encouragingMessages[random];
        message.style.left = `${Math.random() * 80 + 10}%`;
        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 5000);
    }

    // 3-5초마다 랜덤 메시지 표시
    let messageInterval = setInterval(showRandomMessage, Math.random() * 2000 + 3000);

    // 30초 후 메시지 표시 중단
    setTimeout(() => {
        clearInterval(messageInterval);
    }, 30000);

    // 초기 메시지 표시
    setTimeout(showRandomMessage, 2000);

    // 강조 텍스트 효과
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.style.transition = 'background-position 1s ease';
        highlight.addEventListener('mouseover', function() {
            this.style.background = 'linear-gradient(90deg, rgba(255,255,255,0) 0%, #B5EAD7 100%)';
            this.style.backgroundSize = '200% 35%';
            this.style.backgroundPosition = 'left bottom';
            this.style.backgroundRepeat = 'no-repeat';
        });
        
        highlight.addEventListener('mouseout', function() {
            this.style.backgroundPosition = 'right bottom';
        });
    });
}); 