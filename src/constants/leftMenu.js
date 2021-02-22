import { HiTemplate, HiPencilAlt, HiLightBulb, HiColorSwatch, HiIdentification, HiSpeakerphone } from 'react-icons/hi';

export const LeftMenuFrontLists = [
  {
    id: 1,
    backgroundColor: '#ffb53e',
    backgroundImageUrl: '/static/mike-01.png',
    title: '掌編小説',
    message: 'Short Novels',
    url: 'novel'
  },
  {
    id: 2,
    backgroundColor: '#1691DC',
    backgroundImageUrl: '/static/mii-01.png',
    title: 'アイデア投稿',
    message: 'Bakuon2 Posts',
    url: 'novel'
  },
  {
    id: 3,
    backgroundColor: '#E1304E',
    backgroundImageUrl: '/static/saka-01.png',
    title: 'ユーザ投稿',
    message: 'Bakuon2 Posts',
    url: 'novel'
  },
  {
    id: 4,
    backgroundColor: '#24B482',
    backgroundImageUrl: '/static/sai-01.png',
    title: '遺跡の募集',
    message: 'Call for Remains',
    url: 'novel'
  }
];
export const LeftMenuAdminLists = [
  {
    id: 'dashboard',
    title: 'ダッシュボード',
    url: '/admin/dashboard',
    icon: <HiTemplate />
  },
  {
    id: 'novel',
    title: '掌編小説',
    url: '/admin/novel',
    icon: <HiPencilAlt />
  },
  {
    id: 'idea',
    title: 'アイデア投稿',
    url: '/admin/idea',
    icon: <HiLightBulb />
  },
  {
    id: 'message-board',
    title: '掲示板',
    url: '/admin/message-board',
    icon: <HiColorSwatch />
  },
  {
    id: 'user-post',
    title: 'ユーザ投稿',
    url: '/admin/user-post',
    icon: <HiIdentification />
  },
  {
    id: 'call-member',
    title: '遺跡募集',
    url: '/admin/call-member',
    icon: <HiSpeakerphone />
  }
];
