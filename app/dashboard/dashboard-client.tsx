"use client";

import { useState, useEffect } from "react";
import { UploadButton } from "../utils/uploadthing";

export default function DashboardClientPage() {
  const [activeTab, setActiveTab] = useState<
    "news" | "notice" | "talent" | "faculty"
  >("news");
  const [items, setItems] = useState<any[]>([]);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [form, setForm] = useState({
    title: "",
    acronym: "",
    gradient: "",
    date: "",
    description: "",
    img: "",
    logo: "",
  });

  const fetchItems = async () => {
    let ep =
      activeTab === "talent"
        ? "/api/admin/talents"
        : activeTab === "faculty"
          ? "/api/admin/faculties"
          : `/api/admin/list?category=${activeTab}`;
    const res = await fetch(ep);
    if (res.ok) setItems(await res.json());
  };

  useEffect(() => {
    fetchItems();
    setEditingItem(null);
  }, [activeTab]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      id: editingItem?.id,
      category: activeTab,
    };

    let url =
      activeTab === "talent"
        ? "/api/admin/talents"
        : activeTab === "faculty"
          ? "/api/admin/faculties"
          : editingItem
            ? `/api/admin/${editingItem.id}`
            : "/api/admin/publish";

    const res = await fetch(url, {
      method: editingItem ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Saved Successfully!");
      setEditingItem(null);
      setForm({
        title: "",
        acronym: "",
        gradient: "",
        date: "",
        description: "",
        img: "",
        logo: "",
      });
      fetchItems();
    } else {
      alert("Failed to save. Check terminal for error.");
    }
  };

  const deleteItem = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    const url =
      activeTab === "talent"
        ? "/api/admin/talents"
        : activeTab === "faculty"
          ? "/api/admin/faculties"
          : `/api/admin/${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, category: activeTab }),
    });
    fetchItems();
  };

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex bg-white p-1 rounded-lg border shadow-sm">
        {(["news", "notice", "talent", "faculty"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded capitalize font-semibold ${activeTab === tab ? "bg-blue-600 text-white" : "hover:bg-slate-100"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg border shadow-sm space-y-4"
      >
        <input
          className="w-full p-3 border rounded bg-white text-slate-900"
          placeholder="Title/Name"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        {activeTab === "faculty" && (
          <input
            className="w-full p-3 border rounded bg-white text-slate-900"
            placeholder="Acronym (e.g. FST)"
            value={form.acronym}
            onChange={(e) => setForm({ ...form, acronym: e.target.value })}
          />
        )}
        {activeTab !== "talent" && activeTab !== "faculty" && (
          <input
            type="date"
            className="w-full p-3 border rounded bg-white text-slate-900"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        )}

        {(activeTab === "news" ||
          activeTab === "talent" ||
          activeTab === "faculty") && (
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4 rounded text-center">
              <p className="text-xs mb-2 text-slate-500">
                {form.img ? "Image Uploaded" : "Main Image"}
              </p>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  const uploadedUrl = res[0].ufsUrl || res[0].url;

                  // form state update kora:
                  setForm((prev) => ({ ...prev, img: uploadedUrl }));

                  alert("Image Uploaded Successfully!");
                }}
                onUploadError={(error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>
            {activeTab === "faculty" && (
              <div className="border p-4 rounded text-center">
                <p className="text-xs mb-2 text-slate-500">
                  {form.logo ? "Logo Uploaded" : "Faculty Logo"}
                </p>
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) =>
                    setForm({ ...form, logo: res[0].ufsUrl })
                  }
                />
              </div>
            )}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700"
        >
          {editingItem ? "Update" : "Publish"}
        </button>
      </form>

      {/* List */}
      <div className="bg-white rounded-lg border shadow-sm">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border-b last:border-b-0"
          >
            <span className="font-medium text-slate-800">
              {item.title || item.name}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditingItem(item);
                  setForm({
                    title: item.title || item.name,
                    acronym: item.acronym || "",
                    gradient: item.gradientClasses || "",
                    date: "",
                    description: "",
                    img: item.img || "",
                    logo: item.logo || "",
                  });
                }}
                className="text-blue-500 font-semibold px-3 py-1 bg-blue-50 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="text-red-500 font-semibold px-3 py-1 bg-red-50 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
