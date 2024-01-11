// store.js

import { create } from 'zustand' // create로 zustand를 불러옵니다.

  // table에 들어갈 더미 데이터
  const articleDummy = [
    {title: "1번",body:"hello", writer:"무성",id: "musung1", date: "2023-01-09", views: "10" },
    {title: "2번",body:"hello", writer:"무성2",id: "musung1", date: "2023-01-09", views: "10" },
    {title: "3번",body:"hello", writer:"무성3",id: "musung1", date: "2023-01-09", views: "10" },
    {title: "4번", body:"hello",writer:"무성4",id: "musung1", date: "2023-01-09", views: "10" },
  ]

const articleStore = create(set => ({
  articles: articleDummy,
  addArticle: (article) => set(state => ({
    articles: [...state.articles,article]
  }))
}))

export default articleStore