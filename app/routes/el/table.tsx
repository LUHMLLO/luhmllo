import { type PageProps } from "$fresh/server.ts";

export default function Page(_props: PageProps) {
  return (
    <>
      <table>
        <caption>Standard Table Layout</caption>
        <thead>
          <tr>
            <th>Table Heading 1</th>
            <th>Table Heading 2</th>
            <th>Table Heading 3</th>
            <th>Table Heading 4</th>
            <th>Table Heading 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Cell 1</td>
            <td>Table Cell 2</td>
            <td>Table Cell 3</td>
            <td>Table Cell 4</td>
            <td>Table Cell 5</td>
          </tr>
          <tr>
            <td>Table Cell 1</td>
            <td>Table Cell 2</td>
            <td>Table Cell 3</td>
            <td>Table Cell 4</td>
            <td>Table Cell 5</td>
          </tr>
          <tr>
            <td>Table Cell 1</td>
            <td>Table Cell 2</td>
            <td>Table Cell 3</td>
            <td>Table Cell 4</td>
            <td>Table Cell 5</td>
          </tr>
          <tr>
            <td>Table Cell 1</td>
            <td>Table Cell 2</td>
            <td>Table Cell 3</td>
            <td>Table Cell 4</td>
            <td>Table Cell 5</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Table Footer 1</th>
            <th>Table Footer 2</th>
            <th>Table Footer 3</th>
            <th>Table Footer 4</th>
            <th>Table Footer 5</th>
          </tr>
        </tfoot>
      </table>

      <table>
        <caption>Table with Long Content</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              001
            </td>
            <td>
              This is a very long description that should test how the cell
              handles content that exceeds the available space. We want to see
              how text wrapping and overflow handling work with this CSS
              configuration.
            </td>
            <td>
              Electronics
            </td>
            <td>
              Available
            </td>
            <td>
              <time datetime="2023-05-15">2023-05-15</time>
            </td>
          </tr>
          <tr>
            <td>
              002
            </td>
            <td>
              Another lengthy description that includes technical specifications
              and detailed information about the product features and benefits
              to customers looking for specific solutions.
            </td>
            <td>
              Home & Garden
            </td>
            <td>
              Out of Stock
            </td>
            <td>
              <time datetime="2023-06-22">2023-06-22</time>
            </td>
          </tr>
          <tr>
            <td>
              003
            </td>
            <td>
              Short description
            </td>
            <td>
              Clothing
            </td>
            <td>
              Available
            </td>
            <td>
              <time datetime="2023-07-10">2023-07-10</time>
            </td>
          </tr>
          <tr>
            <td>
              004
            </td>
            <td>
              Medium length description with some details about the item that
              provides context but isn't excessively long.
            </td>
            <td>
              Books
            </td>
            <td>
              Pre-order
            </td>
            <td>
              <time datetime="2023-08-05">2023-08-05</time>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <caption>Product Inventory</caption>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P001</td>
            <td>Wireless Bluetooth Headphones</td>
            <td>Audio</td>
            <td>$89.99</td>
            <td>124</td>
          </tr>
          <tr>
            <td>P002</td>
            <td>Ultra HD 4K Smart TV 55"</td>
            <td>Television</td>
            <td>$599.99</td>
            <td>45</td>
          </tr>
          <tr>
            <td>P003</td>
            <td>Ergonomic Office Chair</td>
            <td>Furniture</td>
            <td>$199.99</td>
            <td>67</td>
          </tr>
          <tr>
            <td>P004</td>
            <td>Smartphone Protective Case</td>
            <td>Accessories</td>
            <td>$24.99</td>
            <td>210</td>
          </tr>
          <tr>
            <td>P005</td>
            <td>Portable Bluetooth Speaker</td>
            <td>Audio</td>
            <td>$79.99</td>
            <td>98</td>
          </tr>
        </tbody>
      </table>

      <table>
        <caption>Quarterly Financial Results</caption>
        <thead>
          <tr>
            <th>Quarter</th>
            <th>Revenue</th>
            <th>Expenses</th>
            <th>Profit</th>
            <th>Growth %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1 2023</td>
            <td>$1,250,000</td>
            <td>$875,000</td>
            <td>$375,000</td>
            <td>4.2%</td>
          </tr>
          <tr>
            <td>Q2 2023</td>
            <td>$1,450,000</td>
            <td>$950,000</td>
            <td>$500,000</td>
            <td>5.8%</td>
          </tr>
          <tr>
            <td>Q3 2023</td>
            <td>$1,650,000</td>
            <td>$1,100,000</td>
            <td>$550,000</td>
            <td>6.1%</td>
          </tr>
          <tr>
            <td>Q4 2023</td>
            <td>$1,900,000</td>
            <td>$1,250,000</td>
            <td>$650,000</td>
            <td>7.2%</td>
          </tr>
        </tbody>
      </table>

      <table>
        <caption>Employee Information</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Contact Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E101</td>
            <td>John Smith</td>
            <td>Marketing</td>
            <td>Director</td>
            <td>
              john.smith@example.com<br />+1 (555) 123-4567
            </td>
          </tr>
          <tr>
            <td>E102</td>
            <td>Sarah Johnson</td>
            <td>Human Resources</td>
            <td>Manager</td>
            <td>
              sarah.johnson@example.com<br />+1 (555) 234-5678
            </td>
          </tr>
          <tr>
            <td>E103</td>
            <td>Michael Williams</td>
            <td>Engineering</td>
            <td>Senior Developer</td>
            <td>
              michael.williams@example.com<br />+1 (555) 345-6789
            </td>
          </tr>
          <tr>
            <td>E104</td>
            <td>Emily Davis</td>
            <td>Sales</td>
            <td>Account Executive</td>
            <td>
              emily.davis@example.com<br />+1 (555) 456-7890
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
