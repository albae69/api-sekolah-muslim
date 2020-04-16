const SekolahPilihan = require('../models/SekolahPilihan.model');

exports.create = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: 'tidak boleh kosong',
		});
	}

	const sekolah = new SekolahPilihan({
		nama: req.body.nama,
		asal: req.body.asal,
		deskripsi: req.body.deskripsi,
		jenjang: req.body.jenjang,
		yayasan: req.body.yayasan,
		alamat: req.body.alamat,
		nomor: req.body.nomor,
		email: req.body.email,
		website: req.body.website,
		uangPendaftaran: req.body.uangPendaftaran,
		uangSPP: req.body.uangSPP,
		// gambar: req.body.gambar,
		// brosur: req.body.gambar,
	});

	sekolah
		.save()
		.then(data => res.send(data))
		.catch(e => console.log(e));
};

exports.findAll = (req, res) => {
	SekolahPilihan.find()
		.then(sekolah => res.send(sekolah))
		.catch(e => {
			res.status(500).send({
				message: e.message || 'internal server error',
			});
		});
};

exports.findOne = (req, res) => {
	SekolahPilihan.findById(req.params.id)
		.then(sekolah => {
			res.send(sekolah);
		})
		.catch(e => {
			if (e.kind === 'ObjectId') {
				return res.status(404).send({
					message: 'sekolah not found with id ' + req.params.id,
				});
			}
			return res.status(500).send({
				message: 'error retrieving sekolah with id ' + req.params.id,
			});
		});
};

exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: 'tidak boleh kosong',
		});
	}

	SekolahPilihan.findByIdAndUpdate(
		req.params.id,
		{
			nama: req.body.nama,
			asal: req.body.asal,
			deskripsi: req.body.deskripsi,
			jenjang: req.body.jenjang,
			yayasan: req.body.yayasan,
			alamat: req.body.alamat,
			nomor: req.body.nomor,
			email: req.body.email,
			website: req.body.website,
			uangPendaftaran: req.body.uangPendaftaran,
			uangSPP: req.body.uangSPP,
			// gambar: req.body.gambar,
			// brosur: req.body.gambar,
		},
		{new: true}
	)
		.then(sekolah => {
			if (!sekolah) {
				return res.status(400).send({
					message: 'sekolah not found with id ' + req.params.id,
				});
			}
			return res.send(sekolah);
		})
		.catch(e => {
			if (e.kind === 'ObjectId') {
				return res.status(404).send({
					message: 'sekolah not found with id ' + req.params.id,
				});
			}
			return res.status(500).send({
				message: 'sekolah not found with id ' + req.params.id,
			});
		});
};

exports.remove = (req, res) => {
	SekolahPilihan.findOneAndDelete(req.params.id)
		.then(sekolah => {
			if (!sekolah) {
				return res.status(404).send({
					message: 'sekolah not found with id ' + req.params.id,
				});
			}
			res.send({message: 'sekolah deleted succesfully!'});
		})
		.catch(e => {
			if (e.kind === 'ObjectId' || e.name === 'NotFound') {
				return res.status(404).send({
					message: 'Sekolah not found with id ' + req.params.id,
				});
			}

			res
				.status(500)
				.send({message: 'could not delete sekolah with id' + req.params.id});
		});
};
