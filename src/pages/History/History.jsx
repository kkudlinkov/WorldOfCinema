import React from 'react';
import "./History.css";

const History = () => {
    return (
        <div>
            <div className="container">
                <div className="historyPage">
                    <div className="history__inner">
                        <h1 className="history__title">ИСТОРИЯ ВОЗНИКНОВЕНИЯ КИНО</h1>
                        <img className="mainHistoryPosterImg" src={require('../../media/HistoryImg/MainPoster.webp')}
                             alt=""/>
                        <div className="historyBlockInfo">
                            <h3 className="historyTitleText">Что такое кинематограф</h3>
                            <p className="historyText">Кинематограф (от греч. κινημα, род. п. κινηματος — движение и
                                греч.
                                γραφω — писать, рисовать;
                                то есть «записывающий движение») — отрасль человеческой деятельности, заключающаяся в
                                создании движущихся изображений. Иногда также упоминается как синематограф (от фр.
                                cinématographe, устар.) и кинематогра́фия. Кинематограф был изобретён в конце XIX века и
                                стал крайне популярен в XX веке.<br/><br/>

                                В понятие кинематографа входят киноискусство — вид современного изобразительного
                                искусства,
                                произведения которого создаются при помощи движущихся изображений, и киноиндустрия
                                (кинопромышленность) — отрасль экономики, производящая кинофильмы, спецэффекты для
                                кинофильмов, мультипликацию, и демонстрирующая эти произведения для зрителей.
                                Произведения
                                киноискусства создаются при помощи кинотехники. Изучением кинематографа занимается наука
                                киноведение. Сами кинофильмы могут сниматься в различных жанрах игрового и
                                документального
                                кино.</p>
                        </div>
                        <div className="historyBlockInfo">
                            <h3 className="historyTitleText">ИСТОРИЯ ВОЗНИКНОВЕНИЯ КИНО</h3>
                            <p className="historyText">История кино начинается в 19 веке. В это время фотография как
                                способ запечатления неподвижных объектов уже существовала, но для того, чтобы процесс
                                воссоздания эффекта движения стал возможен, необходимо было, чтобы фотографирование
                                происходило с короткими выдержками. Но и после появления соответствующих типов
                                фотоэмульсий в 70-х годах 19 в. кино появилось не сразу. Известный нам сейчас способ
                                создания кино далеко не сразу был найдет изобретателями. Были созданы десятки систем,
                                которые позволили бы просматривать изображения в движении. В разработке принимал участие
                                и знаменитый Эдиссон. Но его система не стала востребованной, т.к. была создана для
                                индивидуального просмотра кино.<br/><br/>

                                Признанными изобретателями кинематографа стали французы, братья Луи и Огюст Люмьеры.
                                Аппаратура братьев оказалась очень удобной, с её помощью можно было легко снимать кино и
                                показывать его на большом экране, что и принесло успех изобретению Люмьеров.</p>
                            <img className="brothersPosterImg" src={require('../../media/HistoryImg/Brothers.webp')}
                                 alt=""/>
                            <p className="historyText">Первая публичная демонстрация была дана в Париже ещё в марте 1895
                                г., но днём рождения кино считается другая дата, 28 декабря 1895 г., когда состоялся
                                первый коммерческий киносеанс (это произошло в подвале «Гран Кафе» на бульваре
                                Капуцинов).<br/><br/>

                                В своих сеансах Люмьеры демонстрировали несколько коротких (всего 50 сек.) роликов,
                                первым из которых был «Выход рабочих с фабрики». Однако наиболее популярным из этих
                                роликов стал ролик под названием «Прибытие поезда». Поезд на экране как бы надвигался на
                                зал, что выглядело очень реалистично и производило сильное впечатление на зрителей.</p>
                            <img className="trainPosterImg" src={require('../../media/HistoryImg/train.webp')}
                                 alt=""/>
                            <p className="historyText">
                                После гениального изобретения Люмьеров начал своё существование кинематограф, но еще не
                                кино. Братья-изобретатели целью кинематографа видели создание и сохранение конохроники
                                для
                                потомков. Другие видели в их изобретении всего лишь развлечение. Однако кинематограф
                                быстро
                                набирал популярность.<br/><br/>

                                Вскоре им заинтересовался директор одного из парижских театров Жорж Мельес. Он первым
                                оценил
                                возможности кинематографа, увидев в нём, прежде всего, отличное средство сильно
                                расширить
                                возможности сцены. Он первым стал снимать фильмы по сценариям, использовать многие
                                специфические для кино трюки и спецэффекты, и в целом стал одним из главных
                                основоположников
                                кино как самостоятельного вида искусства. Одним из наиболее известных фильмов Мельеса
                                является «Путешествие на Луну» (1902 г.)<br/><br/>

                                В течение первого десятилетия 20 в. продолжительность и разнообразие сценариев
                                кинофильмов
                                постепенно и неуклонно увеличивались. Отношение в обществе к кино меняется — от
                                восприятия
                                его лишь как вида развлечения к восприятию его как вида искусства. В 1908 г. во Франции
                                уже
                                появляется понятие «фильм д’ар» — «художественный фильм».<br/><br/>

                                К 1910 г. 70% фильмов всё ещё производилось во Франции. Однако другие страны, в первую
                                очередь, такие как США, Великобритания, Германия также начинают оказывать заметное
                                влияние
                                на развитие мирового кино. В начале века типичная продолжительность фильма составляла 15
                                минут, к 1910 появляется немало фильмов с продолжительностью около часа, а в 1915 г.
                                американец Гриффит снимает фильм «Рождение нации» (на тему гражданской войны в США)
                                продолжительностью уже целых 3 часа. Этот фильм завоевал большой успех у публики (его
                                посмотрело около 100 млн. человек) и принёс создателям огромные кассовые
                                сборы.<br/><br/>

                                В 1920-х в США начинает уже формироваться киноиндустрия, фильмы ставятся на поток, а
                                режиссёров с главных ролей вытесняют продюсеры. Формируется станадартная голливудская
                                система — продюсер подбирает и покупает сценарий, по которому должен сниматься фильм, он
                                же
                                приглашает режиссёра, он же выбирает актёров, как правило, из числа т. н. «звёзд», сам
                                факт
                                участия которых в фильме уже есть, по сути, определённая приманка для зрителя. Одними из
                                наиболее успешных из продукции американского кинематографа в 1920-е стали комедии,
                                особенно
                                с участием Чарли Чаплина.<br/><br/>

                                Российское кино до революции шло в основном по пути копирования западных образцов.
                                Однако в
                                20-е советские режиссёры начинают сами активно экспериментировать с выразительными
                                возможностями кино. Особенно уделяется внимание попыткам повысить выразительность с
                                помощью
                                специальной тактики монтажа фрагментов фильма. Находки некоторых режиссёров, особенно
                                Сергея
                                Эйзенштейна, вошли в золотой фонд мирового киноискусства.</p>
                        </div>
                        <div className="historyBlockInfo">
                            <h3 className="historyTitleText">ЦВЕТНОЕ КИНО</h3>
                            <p className="historyText">Внедрение цвета в кино происходило медленнее, чем внедрение
                                звука. Технические возможности создания удовлетворительного цветного кино появились ещё
                                в 30-е, а в 1939 г. в США был снят один из первых цветных фильмов, завоевавший огромную
                                популярность — «Унесённые ветром», но устойчивый перевес цветных фильмов перед
                                чёрно-белыми стал складываться лишь в 60-70е. Кроме этого, постепенно улучшаются
                                характеристики плёнки — повышается её светочувствительность, что позволяет во многих
                                случаях обходиться без дополнительных подсветок, снимать в более сложных условиях.
                                Впоследствии под давлением конкуренции со стороны телевидения в США ещё более
                                усиливается тенденция к созданию дорогих, с большим числом спецэффектов и декораций,
                                фильмов — «блокбастеров».</p>
                        </div>
                        <div className="historyBlockInfo">
                            <h3 className="historyTitleText">ПОСЛЕДНИЕ ТЕНДЕНЦИИ КИНО</h3>
                            <p className="historyText">Последние, самые значительные нововведения в кино связаны с
                                началом широкого использования компьютерной графики, причём отнюдь не только в тех
                                случаях и сценах, где изобразить что-то обычными средствами затруднительно, но и
                                практически везде. Одним из наиболее передовых в плане тотального использования
                                компьютерной графики оказался фильм «Матрица», и компьютерные эффекты, (наряду,
                                безусловно, с неординарным и глубоко продуманным сценарием) обеспечили фильму огромный
                                успех. Сейчас компьютерная графика, позволяя легко осуществлять незаметное на экране
                                «смешивание» снятого с натуры и привнесённого при помощи компьютера изображения, задаёт
                                новые стандарты зрелищности и реалистичности (там, где дело касается сложных и
                                нетипичных сцен) кино.</p>
                            <img className="finalPosterImg" src={require('../../media/HistoryImg/finalPosterImg.webp')}
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;