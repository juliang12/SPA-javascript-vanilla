export function PostCard(props){
const {title, date, slug, _embedded  } = props;
let dateFormat = new Date(date).toLocaleDateString()
let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "https://placeimg.com/200/200/nature"
    return`
<article class="post-card">
<img src="${urlPoster}" alt="${title.rendered}">
<h2>${title.rendered}</h2>
<p><time datetime="${date}">${dateFormat}</time></p>
<a href="#/${slug}">Ver Publicacion</a>
</article>
`
}