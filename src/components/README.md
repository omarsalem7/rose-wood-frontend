# SafeImage Component

A wrapper around Next.js `Image` component that automatically handles invalid image sources and provides fallback UI.

## Features

- ✅ **Automatic validation** - Checks if `src` is valid before rendering
- ✅ **Consistent fallbacks** - Same placeholder styling across the app
- ✅ **Layout preservation** - Maintains the same dimensions and styling
- ✅ **Flexible configuration** - Customizable fallback text and styling
- ✅ **Performance** - No unnecessary re-renders or complex logic

## Usage

### Basic Usage

```jsx
import SafeImage from "@/components/SafeImage";

// Simple replacement for Image component
<SafeImage
  src={product.image}
  alt={product.name}
  width={200}
  height={200}
  className="rounded-lg"
/>;
```

### With Custom Fallback

```jsx
<SafeImage
  src={category.image}
  alt={category.name}
  width={220}
  height={140}
  fallback="Category image not available"
  fallbackClassName="w-[220px] h-[140px] bg-blue-100 rounded-lg flex items-center justify-center"
  fallbackTextClassName="text-blue-500 text-sm"
/>
```

### Hide Fallback

```jsx
<SafeImage
  src={optionalImage}
  alt="Optional image"
  showFallback={false}
  // If no image, nothing will be rendered
/>
```

### With Complex Styling

```jsx
<SafeImage
  src={hero.image1}
  alt="Hero image"
  width={400}
  height={400}
  className="w-[149px] h-[175px] md:w-[400px] md:h-[365px] rounded-3xl"
  style={{
    insetInlineEnd: "1.5rem",
  }}
  fallbackClassName="w-[149px] h-[175px] md:w-[400px] md:h-[365px] bg-gray-200 rounded-3xl flex items-center justify-center"
/>
```

## Props

| Prop                    | Type      | Default                                                        | Description                                       |
| ----------------------- | --------- | -------------------------------------------------------------- | ------------------------------------------------- |
| `src`                   | `string`  | -                                                              | Image source URL                                  |
| `alt`                   | `string`  | -                                                              | Alt text for accessibility                        |
| `fallback`              | `string`  | `"No image"`                                                   | Text to show when image is invalid                |
| `fallbackClassName`     | `string`  | `"w-full h-full bg-gray-200 flex items-center justify-center"` | CSS classes for fallback container                |
| `fallbackTextClassName` | `string`  | `"text-gray-500 text-sm"`                                      | CSS classes for fallback text                     |
| `showFallback`          | `boolean` | `true`                                                         | Whether to show fallback UI                       |
| `className`             | `string`  | `""`                                                           | CSS classes applied to both image and fallback    |
| `style`                 | `object`  | `{}`                                                           | Inline styles applied to both image and fallback  |
| `...props`              | -         | -                                                              | All other props passed to Next.js Image component |

## Migration from Conditional Rendering

### Before (Complex)

```jsx
{
  category.mainImageUrl || category.image ? (
    <Image
      src={category.mainImageUrl || category.image}
      alt={category.name}
      width={220}
      height={140}
      className="object-contain mb-6 drop-shadow-md"
    />
  ) : (
    <div className="w-[220px] h-[140px] bg-gray-200 rounded-lg flex items-center justify-center mb-6">
      <span className="text-gray-500 text-sm">No image</span>
    </div>
  );
}
```

### After (Simple)

```jsx
<SafeImage
  src={category.mainImageUrl || category.image}
  alt={category.name}
  width={220}
  height={140}
  className="object-contain mb-6 drop-shadow-md"
  fallbackClassName="w-[220px] h-[140px] bg-gray-200 rounded-lg flex items-center justify-center mb-6"
/>
```

## Benefits

1. **Cleaner Code** - No more complex conditional rendering
2. **Consistent UI** - Same fallback styling everywhere
3. **Easier Maintenance** - Update validation logic in one place
4. **Better Performance** - No unnecessary re-renders
5. **Type Safety** - Better TypeScript support
6. **Accessibility** - Consistent alt text handling

## Error Prevention

The component automatically prevents these common errors:

- ❌ Empty string passed to `src` attribute
- ❌ `null` or `undefined` image sources
- ❌ Whitespace-only strings
- ❌ Missing fallback UI for invalid images
