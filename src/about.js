export default function(){
    const aboutPage = document.createElement('div')
    aboutPage.innerHTML = `
        <div class="home-content">
            <h2>Haswell's Origins</h2>
            <img src="/" alt="Founders Image">
            <p>We are in the business since 1948 <br>
            Our eastern food is delivered and consumed all over the globe.
            Small business to large corporations, everyone deserves to enjoy some of <em>Haswell's</em> occasionally
            </p>
        </div>
    `;
    return aboutPage;
}