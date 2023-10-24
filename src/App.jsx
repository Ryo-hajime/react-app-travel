import React, { useState } from 'react';
import './App.css';

// コンポーネントのインポート
import { Form } from './components/Form';
import { Title } from './components/Title';
import { FavoriteList } from './components/FavoriteList';
import { List } from './components/List';

// 画像未指定の場合のダミー画像
import dummyImg from './img/dummy.jpeg';

export const App = () => {
    // 日付のState
    const [newDate, setNewDate] = useState("");
    const onChangeDate = (event) => setNewDate(event.target.value);

    // 訪れた場所のState
    const [newPlace, setNewPlace] = useState("");
    const onChangePlace = (event) => setNewPlace(event.target.value);

    // サムネイルのState
    const [newThumbnail, setNewThumbnail] = useState(null);

    // サムネイルの画像アップロードの関数
    const onChangeThumb = (event) => {
        const { files } = event.target;
        if (files.length > 0) {
            const fileURL = URL.createObjectURL(files[0]);
            setNewThumbnail(fileURL);
        }
    }

    // 自由記述欄のState
    const [newFreeText, setNewFreeText] = useState("");
    const onChangeFreeText = (event) => setNewFreeText(event.target.value);

    // リストのState
    const [list, setList] = useState([]);

    // お気に入りリスト
    const [favList, setFavList] = useState([]);

    // 投稿ボタンのイベント
    const onClickAdd = () => {
        const newList = {
            date: newDate,
            place: newPlace,
            thumbnail: newThumbnail,
            freeText: newFreeText
        }
        const addList = [...list, newList];
        setList(addList);
        setNewDate("");
        setNewPlace("");
        setNewThumbnail(null);
        setNewFreeText("");
    };

    // お気に入りに入れるボタン
    const onClickFavorite = (index) => {
        const newList = [...list];
        const newFavList = [...favList, list[index]];
        newList.splice(index, 1);
        setList(newList);
        setFavList(newFavList);
    }

    // お気に入りから戻すボタン
    const onClickBack = (index) => {
        const newFavList = [...favList];
        const newList = [...list, favList[index]];
        newFavList.splice(index, 1);
        setList(newList);
        setFavList(newFavList);
    }

    // 削除ボタンのイベント
    const onClickDelete = (index) => {
        const newDelete = [...list];
        newDelete.splice(index, 1);
        setList(newDelete);
    };

    return (
        <div className="container">
            <Title />
            <Form
                date={newDate}
                changeDate={onChangeDate}
                place={newPlace}
                changePlace={onChangePlace}
                changeThumb={onChangeThumb}
                freeText={newFreeText}
                changeFreeText={onChangeFreeText}
                clickAdd={onClickAdd}
            />
            {favList.length > 0 && (
                <FavoriteList
                    favList={favList}
                    clickBack={onClickBack}
                    dummy={dummyImg}
                />
            )}
            <List
                list={list}
                clickDelete={onClickDelete}
                clickFavorite={onClickFavorite}
                favList={favList}
                dummy={dummyImg}
            />
        </div>
    );
}