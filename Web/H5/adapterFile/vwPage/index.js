const div = document.querySelector(".body-list");
const list_div = `
        <div class="list-div">
            <img src="https://placeimg.com/350/350/people/grayscale" class="list-img">
            <div class="second-part">
                <div class="flag-title">
                    <a href="#" >Carter's1年式灰色长袖连体衣包脚爬服全棉鲸鱼男婴儿童装115G093</a>
                </div>
                <div class="flag-price">
                    <span>双11价</span>
                    <strong>¥299.06</strong>
                    <small>(满400减100)</small>
                </div>
                <div class="flag-type">
                    1小时内热卖5885件
                </div>
            </div>
            <div class="third-part">
                <div class="button"><a href="#">马上抢</a></div>
            </div>

        </div>
`;
div.innerHTML = list_div + list_div + list_div + list_div;
