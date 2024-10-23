import PropTypes from 'prop-types';

function Bookmark({bookmark}) {
    const {title} = bookmark;
    return (
        <div>
            <h3 className="text-xl bg-slate-300 p-4 m-4 rounded-xl">{title}</h3>
        </div>
    );
}

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;