import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [checkedRatings, setCheckedRatings] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ratings = params.getAll('rating');

    setCheckedRatings(ratings);
    setSortOrder(params.get('order') || '');
  }, [location.search]);

  const handleFilterChange = (event) => {
    const { name, value, checked } = event.target;
    const params = new URLSearchParams(location.search);

    if (checked) {
      params.append(name, value);
    } else {
      params.delete(name, value);
    }
    navigate({ search: params.toString() });
  };

  const handleSortChange = (event) => {
    const params = new URLSearchParams(location.search);
    params.set('order', event.target.value);
    navigate({ search: params.toString() });
  };

  return (
    <div style={{width:"150px"}}>
      <h3>Filters</h3>

      {[1, 2, 3, 4, 5].map((rating) => (
        <div key={rating}  style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <input
            type="checkbox"
            name="rating"
            value={rating}
            checked={checkedRatings.includes(rating.toString())}
            onChange={handleFilterChange}
          />
          <div key={rating} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <React.Fragment key={star}>
                  {star <= rating ? (
                    <FaStar
                      size={24}
                      color="gold"
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <FaRegStar
                      size={24}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      <h3>Sort</h3>
      <div style={{textWrap:"nowrap"}}>
        <input
          type="radio"
          name="order"
          value="asc"
          checked={sortOrder === 'asc'}
          onChange={handleSortChange}
        />
        <label>Ascending</label>
      </div>
      <div style={{textWrap:"nowrap"}}>
        <input
          type="radio"
          name="order"
          value="desc"
          checked={sortOrder === 'desc'}
          onChange={handleSortChange}
        />
        <label>Descending</label>
      </div>
    </div>
  );
};

export default SideBar;
