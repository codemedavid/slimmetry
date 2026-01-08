-- Add Tirzepatide and Retatrutide products for SLIMMETRY
-- Run this SQL in your Supabase SQL Editor

-- Insert Tirzepatide product
INSERT INTO public.products (id, name, description, base_price, category, image_url, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059301',
  'Tirzepatide',
  'Dual GIP and GLP-1 receptor agonist for advanced metabolic support. Clinically researched peptide for weight management and metabolic balance.',
  3500.00,
  'c0a80121-7ac0-4e78-94f8-585d77059123', -- Weight Management category
  NULL,
  true,
  true,
  100,
  99.0,
  'Store at 2-8°C. Protect from light.'
);

-- Insert Retatrutide product
INSERT INTO public.products (id, name, description, base_price, category, image_url, featured, available, stock_quantity, purity_percentage, storage_conditions)
VALUES (
  'd0a80121-7ac0-4e78-94f8-585d77059302',
  'Retatrutide',
  'Triple-action GLP-1/GIP/Glucagon receptor agonist. Next-generation metabolic peptide for comprehensive weight and metabolic support.',
  4500.00,
  'c0a80121-7ac0-4e78-94f8-585d77059123', -- Weight Management category
  NULL,
  true,
  true,
  100,
  99.0,
  'Store at 2-8°C. Protect from light.'
);

-- Insert Tirzepatide size variations (15mg, 30mg, 60mg)
INSERT INTO public.product_variations (product_id, name, quantity_mg, price, stock_quantity)
VALUES
  ('d0a80121-7ac0-4e78-94f8-585d77059301', '15mg', 15, 3500.00, 50),
  ('d0a80121-7ac0-4e78-94f8-585d77059301', '30mg', 30, 5500.00, 50),
  ('d0a80121-7ac0-4e78-94f8-585d77059301', '60mg', 60, 9000.00, 50);

-- Insert Retatrutide size variations (5mg, 10mg)
INSERT INTO public.product_variations (product_id, name, quantity_mg, price, stock_quantity)
VALUES
  ('d0a80121-7ac0-4e78-94f8-585d77059302', '5mg', 5, 4500.00, 50),
  ('d0a80121-7ac0-4e78-94f8-585d77059302', '10mg', 10, 7500.00, 50);

-- Verify the products were added
SELECT p.name, p.description, pv.name as variation, pv.price
FROM public.products p
LEFT JOIN public.product_variations pv ON p.id = pv.product_id
WHERE p.id IN ('d0a80121-7ac0-4e78-94f8-585d77059301', 'd0a80121-7ac0-4e78-94f8-585d77059302')
ORDER BY p.name, pv.quantity_mg;
