import {create} from 'zustand'

export const useAd = create((set, get) => ({
    adList: [
        {
          img: 'https://avatars.mds.yandex.net/get-adfox-content/2462621/230518_adfox_2374300_6925340.7a8d50ea9f8c09820ea5ab32e6cf4c14.png/optimize.webp'
        },
        {
            img: 'https://storage.mds.yandex.net/get-bstor/8871297/878bc525-c5a5-4642-8e63-ea18557db754.png'
        }
    ]
}))