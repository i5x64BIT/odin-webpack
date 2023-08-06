export default function(){
    const homePage = document.createElement('div')
    homePage.innerHTML = `
        <div class="home-content">
            <p>Our resturant is the best resturant in town</p>
            <h2 class="title">Main Dishes</h2>
            <div class="card">
                <img src="/" alt="#">
                <h3 class="title">kebab</h3>
                <p>A very tasty kebab</p>
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
        </div>
    `;
    return homePage;
}