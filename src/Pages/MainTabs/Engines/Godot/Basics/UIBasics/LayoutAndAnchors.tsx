import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LayoutAndAnchors = () => {
  const markdownFilePath = 'Engines/Godot/Basics/UIBasics/LayoutAndAnchors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Layout & Anchors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LayoutAndAnchors;
