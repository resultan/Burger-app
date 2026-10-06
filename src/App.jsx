import { useState } from 'react'
import './App.css'

const avocadoTurkey = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80'
const baconDeluxe = 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80'
const bbqRanch = 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80'
const classicCheeseburger = 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80'
const hawaiianTeriyaki = 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=80'
const mushroomSwiss = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
const signatureDouble = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
const spicyJalapeno = 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80'
const truffleGarlic = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80'
const veggieBlackBean = 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=900&q=80'

const burgers = [
  {
    id: 'classic',
    name: 'Classic Cheeseburger',
    description:
      'A timeless favorite featuring a seared beef patty topped with melted American cheese, crisp lettuce, ripe tomatoes, pickles, white onions, and a dash of signature burger sauce on a toasted sesame seed bun.',
    price: 220,
    image: classicCheeseburger,
    rating: 5,
    label: 'Best seller',
  },
  {
    id: 'bacon',
    name: 'Bacon Deluxe',
    description:
      'Thick-cut hardwood smoked bacon layered over a juicy beef patty, topped with sharp cheddar cheese, fresh lettuce, sliced tomatoes, and creamy mayonnaise on a soft brioche bun.',
    price: 280,
    image: baconDeluxe,
    rating: 5,
  },
  {
    id: 'mushroom',
    name: 'Mushroom Swiss Burger',
    description:
      'Sautéed cremini and button mushrooms piled high on a seasoned beef patty, melted under a blanket of nutty Swiss cheese, finished with garlic aioli on a toasted potato roll.',
    price: 295,
    image: mushroomSwiss,
    rating: 5,
  },
  {
    id: 'bbq',
    name: 'BBQ Ranch & Onion Ring Burger',
    description:
      'A smoky combination of a beef patty topped with crispy golden onion rings, tangy BBQ sauce, melted pepper jack cheese, applewood smoked bacon, and a drizzle of buttermilk ranch dressing.',
    price: 320,
    image: bbqRanch,
    rating: 5,
  },
  {
    id: 'jalapeno',
    name: 'Spicy Jalapeño Smash Burger',
    description:
      'Two thin, crispy-edged beef patties smashed with sliced jalapeños, covered in melted Monterey Jack cheese, spicy chipotle mayo, fresh cilantro, and pickled red onions on a toasted bun.',
    price: 310,
    image: spicyJalapeno,
    rating: 4,
    label: 'Hot pick',
  },
  {
    id: 'truffle',
    name: 'Truffle Garlic Butter Burger',
    description:
      'An elevated gourmet option featuring a prime beef patty infused with garlic butter, topped with caramelized onions, aged white cheddar, arugula, and rich black truffle mayonnaise.',
    price: 360,
    image: truffleGarlic,
    rating: 5,
    label: 'Gourmet',
  },
  {
    id: 'avocado',
    name: 'Avocado Turkey Burger',
    description:
      'A lean, seasoned turkey patty paired with fresh sliced avocado, alfalfa sprouts, red onion, sliced tomato, and a splash of herb-lemon yogurt sauce on a whole grain bun.',
    price: 290,
    image: avocadoTurkey,
    rating: 5,
  },
  {
    id: 'double',
    name: 'Signature Double Cheeseburger',
    description:
      'Two juicy seared beef patties stacked with melted cheddar cheese, crisp lettuce, fresh tomato slices, red onions, and house sauce on a toasted brioche bun.',
    price: 330,
    image: signatureDouble,
    rating: 5,
    label: 'Beast mode',
  },
  {
    id: 'veggie',
    name: 'Veggie Black Bean Burger',
    description:
      'A house-made black bean and sweet corn patty spiced with cumin and smoked paprika, topped with pepper jack cheese, pico de gallo, fresh lettuce, and guacamole on a toasted brioche bun.',
    price: 260,
    image: veggieBlackBean,
    rating: 5,
  },
  {
    id: 'hawaiian',
    name: 'Hawaiian Teriyaki Burger',
    description:
      'A seared beef patty glazed in sweet teriyaki sauce, topped with a grilled pineapple ring, melted Swiss cheese, crisp lettuce, and mayo on a toasted sesame seed bun.',
    price: 285,
    image: hawaiianTeriyaki,
    rating: 5,
  },
]

const formatPrice = (price) => `₱${price.toFixed(2)}`

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H7" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  )
}

function HeartIcon({ filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={filled ? 'is-filled' : ''}
    >
      <path d="M20.8 8.7c0 5.5-8.8 10.1-8.8 10.1S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />
    </svg>
  )
}

function App() {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const addToCart = (burger) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === burger.id)

      if (existing) {
        return current.map((item) =>
          item.id === burger.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...current, { ...burger, quantity: 1 }]
    })

    setCartOpen(true)
  }

  const updateQuantity = (id, change) => {
    setCart((current) =>
      current.flatMap((item) => {
        if (item.id !== id) {
          return [item]
        }

        const quantity = item.quantity + change

        return quantity > 0 ? [{ ...item, quantity }] : []
      }),
    )
  }

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Burger Beast home">
          <span className="brand-mark">BB</span>

          <span className="brand-copy">
            <strong>
              BURGER
              <br />
              <em>BEAST</em>
            </strong>

            <small>Feed Your Hunger.</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </a>

          <a href="#menu" onClick={() => setMenuOpen(false)}>
            OUR MENU
          </a>

          <a href="#shop" onClick={() => setMenuOpen(false)}>
            SHOP
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>

          <button
            className="cart-button"
            type="button"
            aria-label={`Open cart with ${cartCount} items`}
            onClick={() => {
              setCartOpen(true)
              setMenuOpen(false)
            }}
          >
            <CartIcon />

            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="menu-intro" id="about">
          <p className="eyebrow">
            THE HOUSE OF BIG BITES <span>✦</span> SINCE 2024
          </p>

          <h1>
            OUR SIGNATURE <span>BURGERS</span>
          </h1>

          <p className="intro-copy">
            Unleash your appetite and take a bite out of something beastly!
            Our burgers are stacked with juicy, perfectly grilled patties,
            melty cheese, fresh toppings, crispy goodness, and mouthwatering
            sauces all packed into a toasted, delicious bun. Whether you’re
            craving cheesy, crispy, spicy, or extra-meaty, Burger Beast has the
            ultimate bite waiting for you.
          </p>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PICK YOUR BEAST</p>
              <h2>Built for big appetites.</h2>
            </div>

            <span className="menu-count">
              {burgers.length} signature creations
            </span>
          </div>

          <div className="burger-grid" id="shop">
            {burgers.map((burger) => (
              <article className="burger-card" key={burger.id}>
                <div className="card-image-wrap">
                  {burger.label && (
                    <span className="product-label">{burger.label}</span>
                  )}

                  <img src={burger.image} alt={burger.name} />

                  <button
                    type="button"
                    className="favorite-button"
                    aria-label={`Favorite ${burger.name}`}
                    onClick={() => toggleFavorite(burger.id)}
                  >
                    <HeartIcon
                      filled={favorites.includes(burger.id)}
                    />
                  </button>
                </div>

                <div className="card-content">
                  <div className="rating-row">
                    <span
                      className="stars"
                      aria-label={`${burger.rating} out of 5 stars`}
                    >
                      {'★'.repeat(burger.rating)}
                      <span className="muted-stars">
                        {'★'.repeat(5 - burger.rating)}
                      </span>
                    </span>

                    <span className="rating-text">
                      {burger.rating}.0
                    </span>
                  </div>

                  <h3>{burger.name}</h3>

                  <p>{burger.description}</p>

                  <div className="card-footer">
                    <strong>{formatPrice(burger.price)}</strong>

                    <button
                      type="button"
                      className="add-button"
                      onClick={() => addToCart(burger)}
                    >
                      <span>+</span> ADD TO CART
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark">BB</span>

            <span className="brand-copy">
              <strong>
                BURGER
                <br />
                <em>BEAST</em>
              </strong>

              <small>Feed Your Hunger.</small>
            </span>
          </a>

          <p>
            Stacked high, grilled hot, and made for the seriously hungry.
          </p>
        </div>

        <div>
          <h4>EXPLORE</h4>
          <a href="#about">About us</a>
          <a href="#menu">Our menu</a>
          <a href="#shop">Shop</a>
        </div>

        <div>
          <h4>GET IN TOUCH</h4>
          <p>hello@burgerbeast.ph</p>
          <p>+63 917 555 0149</p>
          <p>Manila, Philippines</p>
        </div>

        <div className="socials">
          <h4>FOLLOW THE BEAST</h4>

          <div>
            <a href="#contact" aria-label="Instagram">
              ig
            </a>

            <a href="#contact" aria-label="Facebook">
              fb
            </a>

            <a href="#contact" aria-label="TikTok">
              tk
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 Burger Beast. All rights reserved.</span>
          <span>Made for hungry people.</span>
        </div>
      </footer>

      {cartOpen && (
        <div
          className="cart-overlay"
          role="presentation"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="cart-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cart-header">
              <div>
                <p className="eyebrow">YOUR ORDER</p>

                <h2>
                  Beast bag <span>({cartCount})</span>
                </h2>
              </div>

              <button
                type="button"
                className="close-button"
                aria-label="Close cart"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <span>☻</span>

                <h3>Your bag is empty.</h3>

                <p>Pick a beast and let's fix that.</p>

                <button
                  type="button"
                  className="add-button"
                  onClick={() => setCartOpen(false)}
                >
                  BROWSE BURGERS
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt="" />

                      <div className="cart-item-info">
                        <h3>{item.name}</h3>

                        <strong>{formatPrice(item.price)}</strong>

                        <div className="quantity">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, -1)
                            }
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, 1)
                            }
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>{formatPrice(subtotal)}</strong>
                  </div>

                  <p>
                    Taxes and delivery calculated at checkout.
                  </p>

                  <button
                    type="button"
                    className="checkout-button"
                  >
                    CHECKOUT <span>→</span>
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  )
}

export default App