export function States({ items }) {

    if (!items.length) {
        return (
            <p className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        );
    }

    const totalNumberOfItems = items.length;
    const totalNumberOfPackedItems = items.filter(item => item.packed).length;
    const percentage = Math.round(totalNumberOfPackedItems / totalNumberOfItems * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? 'You have got everything! Ready to go ✈️' :
                    `🛍️ You have ${totalNumberOfItems} items on your list, and you have already Packed ${totalNumberOfPackedItems} (${percentage}%)`}
            </em>

        </footer>

    );
}
