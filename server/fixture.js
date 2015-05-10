if (Post.find().count() === 0) {
    Post.insert({
        title: '哈哈哈哈哈哈哈哈我根本不知道我要说啥米',
        postUser: 'man',
        disQuan: 22,
        lastRe: 'pafee',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus optio ducimus nobis, atque voluptates quis pariatur, doloremque esse quam quae rem accusantium distinctio qui, illo provident reiciendis placeat. Omnis, soluta.'
    });
    
    Post.insert({
        title: 'yes we know',
        postUser: 'mayo',
        disQuan: 13,
        lastRe: 'ushachi',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptate, non? Porro dolorum natus tempora numquam eos repellendus doloremque nesciunt enim quam est. Cupiditate doloribus, explicabo tempora voluptatibus impedit facere!'
    });
    
    Post.insert({
        title: 'i dont know what you say',
        postUser: 'hahaha',
        disQuan: 754,
        lastRe: 'gagaga',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facere pariatur officiis illum accusamus illo, incidunt quidem, iusto et ipsum, omnis deserunt dignissimos nesciunt. Totam eveniet magni, libero expedita fugit.'
    });
}