import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Vec2Vec3Types = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/Math/Vec2Vec3Types';

  return (
    <>
      <PageLayout>
        <PageTitle title="Vec2/Vec3 Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Vec2Vec3Types;
