export const List = (props) => {
    const { list, clickDelete, clickFavorite, favList, dummy } = props;
    return(
        <div className="contents">
            {list.map((item, index) => {
                return(
                    <article key={index}>
                        <img src={item.thumbnail || dummy} alt={item.place} className='thumbnail'/>
                        <small className="date">{item.date}</small>
                        <p className="place">{item.place}</p>
                        <div className="article_btn">
                            <input type="submit" value="削除" onClick={() => clickDelete(index)} />
                            <input type="submit" value="お気に入り" onClick={() => clickFavorite(index)} disabled={favList.length >= 3} />
                        </div>
                        <p className='freeText'>{item.freeText}</p>
                    </article>
                )
            })}
        </div>
    )
}