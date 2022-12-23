export default function genPopup() {
    const background = document.createElement('section');
    background.style.backgroundColor = '#121214';
    background.style.opacity = '70%';
    background.style.position = 'absolute';
    background.style.top = '0px';
    background.style.left = '0px';
    background.style.width = '100%';
    background.style.height = '668px';
    document.body.appendChild(background);

    const popup = document.createElement('div');
    popup.style.position = 'absolute';
    popup.style.top = '100px';
    popup.style.left = '515px';
    document.body.appendChild(popup);

    const emailsServices = [
        {
            n: 'Acessar Gmail',
            l: 'https://mail.google.com/'
        },
        {
            n: 'Acessar Yahoo',
            l: 'https://mail.yahoo.com/'
        },
        {
            n: 'Acessar Outlook',
            l: 'https://outlook.live.com/'
        }
    ];

    emailsServices.forEach(email => {
        const a = document.createElement('a');
        a.setAttribute('href', `${email.l}`);
        a.setAttribute('target', '_blank');
        a.innerHTML = email.n

        a.addEventListener('click', () => {
            document.body.removeChild(background);
            document.body.removeChild(popup);
        });

        popup.appendChild(a);
    });

    background.addEventListener('click', () => {
        document.body.removeChild(background);
        document.body.removeChild(popup);
    });
}