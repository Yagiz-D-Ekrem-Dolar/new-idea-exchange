from PIL import Image
import os

img_path = r"C:\Users\yozid\.gemini\antigravity\brain\a5fd0296-20b8-43a8-bf5c-a826c66eb536\media__1780927223284.png"
dest_path = r"C:\Users\yozid\Desktop\A\App\public\assets\is_new_logo.png"

if not os.path.exists(img_path):
    print("Error: Source image not found at", img_path)
    exit(1)

img = Image.open(img_path)
img = img.convert("RGBA")
width, height = img.size

# We start a BFS from the corners and boundaries
visited = [[False] * height for _ in range(width)]
queue = []

# Add all border pixels that are close to white
for x in range(width):
    for y in [0, height - 1]:
        r, g, b, a = img.getpixel((x, y))
        if r > 240 and g > 240 and b > 240:
            queue.append((x, y))
            visited[x][y] = True

for y in range(height):
    for x in [0, width - 1]:
        if not visited[x][y]:
            r, g, b, a = img.getpixel((x, y))
            if r > 240 and g > 240 and b > 240:
                queue.append((x, y))
                visited[x][y] = True

# BFS to find all connected white pixels
while queue:
    cx, cy = queue.pop(0)
    # Set this pixel to transparent
    img.putpixel((cx, cy), (255, 255, 255, 0))
    
    # Check neighbors
    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        nx, ny = cx + dx, cy + dy
        if 0 <= nx < width and 0 <= ny < height:
            if not visited[nx][ny]:
                r, g, b, a = img.getpixel((nx, ny))
                if r > 220 and g > 220 and b > 220:  # slightly more permissive threshold for smooth edges
                    visited[nx][ny] = True
                    queue.append((nx, ny))

img.save(dest_path, "PNG")
print("SUCCESS: Image background removed and saved to", dest_path)
