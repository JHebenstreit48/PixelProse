import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Vec2Vec3Types = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/Math/Vec2Vec3Types';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Vec2/Vec3 Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Vec2Vec3Types;
