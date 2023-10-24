export const FavoriteList = (props) => {
    const { favList, clickBack, dummy } = props;
    return(
        <>
            <h2 className='fav-ttl'>お気に入り</h2>
            <small className='fav-subttl'>お気に入りは３つまで</small>
            <div className="fav-contents">
                {favList.map((item, index) => {
                    return(
                        <article key={index}>
                            <img src={item.thumbnail || dummy} alt={item.place} className='thumbnail'/>
                            <small className="date">{item.date}</small>
                            <p className="place">{item.place}</p>
                            <div className="article_btn">
                                <input type="submit" value="戻す" onClick={() => clickBack(index)}/>
                            </div>
                            <p className='freeText'>{item.freeText}</p>
                        </article>
                    )
                })}
            </div>
        </>
    )
}