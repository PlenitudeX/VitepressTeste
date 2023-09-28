<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import Componente from './Template.vue'
import './.vitepress/style.css'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>


<!-- <VPTeamMembers size="small" :members="members" /> -->
<Componente />

