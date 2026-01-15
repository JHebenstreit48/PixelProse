import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const 2DAnd3DBodies = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Physics/2DAnd3DBodies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="2D & 3D Bodies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default 2DAnd3DBodies;
