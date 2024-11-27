import React from "react";


export default function CardExample() {
    return (
        <div class="w-full overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-nowrap">John Doe</td>
              <td>johndoe@example.com</td>
              <td><span class="badge badge-soft badge-success text-xs">Professional</span></td>
              <td class="text-nowrap">March 1, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--pencil]"></span></button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--trash]"></span></button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--dots-vertical]"></span></button>
              </td>
            </tr>
            <tr>
              <td class="text-nowrap">Jane Smith</td>
              <td>janesmith@example.com</td>
              <td><span class="badge badge-soft badge-error text-xs">Rejected</span></td>
              <td class="text-nowrap">March 2, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--pencil]"></span></button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--trash]"></span></button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--dots-vertical]"></span></button>
              </td>
            </tr>
            <tr>
              <td class="text-nowrap">Alice Johnson</td>
              <td>alicejohnson@example.com</td>
              <td><span class="badge badge-soft badge-info text-xs">Applied</span></td>
              <td class="text-nowrap">March 3, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--pencil]"></span></button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--trash]"></span></button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--dots-vertical]"></span></button>
              </td>
            </tr>
            <tr>
              <td class="text-nowrap">Bob Brown</td>
              <td>bobrown@example.com</td>
              <td><span class="badge badge-soft badge-primary text-xs">Current</span></td>
              <td class="text-nowrap">March 4, 2024</td>
              <td>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--pencil]"></span></button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--trash]"></span></button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--dots-vertical]"></span></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>






    );
}
