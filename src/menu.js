export default function(){
    const menuPage = document.createElement('div')
    menuPage.classList = 'menu-content';
    menuPage.innerHTML = `
    <h2 class="title">Starter Dishes</h2>
    <div class="card">
        <img src="/" alt="#">
        <h3 class="title">Salad</h3>
        <p>A very tasty salad</p>
    </div>
    <div class="card">
        <img src="/" alt="#">
        <h3 class="title">hummus</h3>
        <p>A very tasty hummus</p>
    </div>
    <div class="card">
        <img src="/" alt="#">
        <h3 class="title">Falafel</h3>
        <p>A very tasty falafel</p>
    </div>

    <h2 class="title">Main Dishes</h2>
    <div class="card">
        <img src="/" alt="#">
        <h3 class="title">kebab</h3>
        <p>A very tasty kebab</p>
    </div>
    <div class="card">
        <img src="/" alt="#">
        <h3 class="title">Duck Knuckle</h3>
        <p>A very tasty duck</p>
    </div>
    <div class="card">
        <img src="/" alt="#">
        <h3 class="title">Marrocan Fish</h3>
        <p>A very tasty marrocan fish</p>
    </div>
    `;
    return menuPage;
}