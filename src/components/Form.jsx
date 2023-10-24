export const Form = (props) => {
    const { date, changeDate, place, changePlace, changeThumb, freeText, changeFreeText, clickAdd } = props;
    return(
        <div className='form'>
            <div className="input_wrapper">
                <div className="input_area">
                    <p>
                        <label htmlFor="date">訪れた日<small>　※必須</small></label>
                        <input type="date" id="date" value={date} onChange={changeDate} />
                    </p>
                    <p>
                        <label htmlFor='place'>訪れた場所<small>　※必須</small></label>
                        <input type="text" id="place" name="place" value={place} onChange={changePlace} />
                    </p>
                    <p>
                        <label htmlFor='thumbnail'>サムネイル</label>
                        <input type="file" id="thumbnail" name="thumbnail" onChange={changeThumb} />
                    </p>
                </div>
                <div className="textarea">
                    <p>
                        <label htmlFor='freeText'>自由記述</label>
                        <textarea name="" id="freeText" cols="30" rows="10" value={freeText} onChange={changeFreeText}></textarea>
                    </p>
                </div>
            </div>
            {
                date.length === 0 || place.length === 0 ? (
                    <button className="submit" disabled>投稿する</button>
                ) : (
                    <button className="submit active" onClick={clickAdd}>投稿する</button>
                )
            }
        </div>
    );
};