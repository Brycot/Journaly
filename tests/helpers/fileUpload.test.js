import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'dic16imah',
    api_key: '939734759632144',
    api_secret: 'TRYnDds5gvztTG52HyDod8vLWHc',
    secure: true,
});

describe('Tests in fileUpload', () => {
    test('should upload the file succesfull to cloudinary', async () => {
        const imageUrl =
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg?crop=0.633xw:0.947xh;0.0962xw,0.0528xh&resize=640:*';

        // 'creo' la imagen para el test
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto,jpg');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
    });
    test('should return null', async () => {
        const url = await fileUpload();
        expect(url).toBe(null);
    });
});
