-- SLIMMETRY Updated Product Catalog (2026-05-01)
-- Run this SQL in your Supabase SQL Editor

-- Clear existing products and variations
DELETE FROM public.product_variations;
DELETE FROM public.products;
DELETE FROM public.categories;

-- =============================================
-- CATEGORIES
-- =============================================
INSERT INTO public.categories (id, name, sort_order, icon, active) VALUES
  ('c0a80121-7ac0-4e78-94f8-585d77059123', 'Weight Management',    1, 'Scale',    true),
  ('c0a80121-7ac0-4e78-94f8-585d77059124', 'Beauty & Anti-Aging',  2, 'Sparkles', true),
  ('c0a80121-7ac0-4e78-94f8-585d77059125', 'Wellness & Vitality',  3, 'Heart',    true),
  ('c0a80121-7ac0-4e78-94f8-585d77059126', 'Lipolytics',           4, 'Droplet',  true);


-- =============================================
-- FEATURED PRODUCTS
-- =============================================

-- 1. Tirzepatide — Featured (15mg / 30mg / 60mg)
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059301',
  'Tirzepatide',
  'Dual GIP and GLP-1 receptor agonist for advanced metabolic support. Premium quality peptide for weight management. FREE SHIPPING on all Tirzepatide orders.',
  3000.00,
  'c0a80121-7ac0-4e78-94f8-585d77059123',
  true, true, 100, 99.0,
  'Store at 2-8°C. Protect from light.'
);

-- 2. Retatrutide — Featured (10mg / 20mg / 30mg)
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059302',
  'Retatrutide',
  'Triple-action GLP-1/GIP/Glucagon receptor agonist. Next-generation metabolic peptide for comprehensive weight and metabolic support.',
  2800.00,
  'c0a80121-7ac0-4e78-94f8-585d77059123',
  true, true, 100, 99.0,
  'Store at 2-8°C. Protect from light.'
);


-- =============================================
-- NON-FEATURED PRODUCTS
-- =============================================

-- 1. Lemon Bottle 10ml (Unbranded)
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059303',
  'Lemon Bottle 10ml (Unbranded)',
  'Lipolytic solution for targeted fat reduction. Unbranded 10ml vial.',
  1500.00,
  'c0a80121-7ac0-4e78-94f8-585d77059126',
  false, true, 100, 99.0,
  'Store at room temperature. Protect from light.'
);

-- 2. Glutathione 1500mg
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059304',
  'Glutathione 1500mg',
  'Master antioxidant for skin brightening, detoxification, and immune support.',
  1500.00,
  'c0a80121-7ac0-4e78-94f8-585d77059124',
  false, true, 100, 99.0,
  'Store at 2-8°C. Protect from light.'
);

-- 3. GHK-Cu (50mg / 100mg)
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059305',
  'GHK-Cu',
  'Copper peptide for skin rejuvenation, collagen production, and anti-aging.',
  1300.00,
  'c0a80121-7ac0-4e78-94f8-585d77059124',
  false, true, 100, 99.0,
  'Store at -20°C. Protect from light.'
);

-- 4. Cagrilintide (5mg / 10mg)
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059306',
  'Cagrilintide',
  'Long-acting amylin analog for appetite control and metabolic regulation.',
  1000.00,
  'c0a80121-7ac0-4e78-94f8-585d77059123',
  false, true, 100, 99.0,
  'Store at 2-8°C. Protect from light.'
);

-- 5. NAD+ 500mg
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059307',
  'NAD+ 500mg',
  'Nicotinamide Adenine Dinucleotide for cellular energy, longevity, and metabolic health.',
  1800.00,
  'c0a80121-7ac0-4e78-94f8-585d77059125',
  false, true, 100, 99.0,
  'Store at -20°C. Protect from light.'
);

-- 6. Lipo-C w/ B12
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059308',
  'Lipo-C w/ B12',
  'Lipotropic injection with B12 to support fat metabolism and energy.',
  1900.00,
  'c0a80121-7ac0-4e78-94f8-585d77059126',
  false, true, 100, 99.0,
  'Store at 2-8°C. Protect from light.'
);

-- 7. Tesamorelin 10mg
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059309',
  'Tesamorelin 10mg',
  'Growth hormone-releasing hormone (GHRH) analog for visceral fat reduction and body composition.',
  1800.00,
  'c0a80121-7ac0-4e78-94f8-585d77059123',
  false, true, 100, 99.0,
  'Store at 2-8°C. Protect from light.'
);

-- 8. Korea Lemon Bottle (1 box / 5 vials)
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059310',
  'Korea Lemon Bottle (1 box / 5 vials)',
  'Authentic Korean Lemon Bottle lipolytic solution. 1 box contains 5 vials.',
  6000.00,
  'c0a80121-7ac0-4e78-94f8-585d77059126',
  false, true, 100, 99.0,
  'Store at room temperature. Protect from light.'
);

-- 9. Aqualyx (1 box)
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059311',
  'Aqualyx (1 box)',
  'Injectable fat-dissolving solution for targeted body contouring. 1 box.',
  5000.00,
  'c0a80121-7ac0-4e78-94f8-585d77059126',
  false, true, 100, 99.0,
  'Store at room temperature. Protect from light.'
);

-- 10. Lipo Vela (1 box / 10 vials)
INSERT INTO public.products (id, name, description, base_price, category, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059312',
  'Lipo Vela (1 box / 10 vials)',
  'Lipolytic injection for localized fat reduction. 1 box contains 10 vials.',
  4500.00,
  'c0a80121-7ac0-4e78-94f8-585d77059126',
  false, true, 100, 99.0,
  'Store at room temperature. Protect from light.'
);


-- =============================================
-- PRODUCT VARIATIONS
-- =============================================

-- Tirzepatide: 15mg / 30mg / 60mg
INSERT INTO public.product_variations (product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0a80121-7ac0-4e78-94f8-585d77059301', '15mg', 15, 3000.00, 50),
  ('d0a80121-7ac0-4e78-94f8-585d77059301', '30mg', 30, 4500.00, 50),
  ('d0a80121-7ac0-4e78-94f8-585d77059301', '60mg', 60, 5500.00, 50);

-- Retatrutide: 10mg / 20mg / 30mg
INSERT INTO public.product_variations (product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0a80121-7ac0-4e78-94f8-585d77059302', '10mg', 10, 2800.00, 50),
  ('d0a80121-7ac0-4e78-94f8-585d77059302', '20mg', 20, 3500.00, 50),
  ('d0a80121-7ac0-4e78-94f8-585d77059302', '30mg', 30, 4800.00, 50);

-- GHK-Cu: 50mg / 100mg
INSERT INTO public.product_variations (product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0a80121-7ac0-4e78-94f8-585d77059305', '50mg',  50,  1300.00, 50),
  ('d0a80121-7ac0-4e78-94f8-585d77059305', '100mg', 100, 1800.00, 50);

-- Cagrilintide: 5mg / 10mg
INSERT INTO public.product_variations (product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0a80121-7ac0-4e78-94f8-585d77059306', '5mg',  5,  1000.00, 50),
  ('d0a80121-7ac0-4e78-94f8-585d77059306', '10mg', 10, 1300.00, 50);


-- =============================================
-- VERIFY
-- =============================================
SELECT p.name, p.base_price, p.featured, c.name AS category
FROM public.products p
JOIN public.categories c ON c.id = p.category
ORDER BY p.featured DESC, p.name;

SELECT p.name AS product, v.name AS variation, v.price
FROM public.product_variations v
JOIN public.products p ON p.id = v.product_id
ORDER BY p.name, v.quantity_mg;
