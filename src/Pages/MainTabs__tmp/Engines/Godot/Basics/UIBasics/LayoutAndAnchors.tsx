import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const LayoutAndAnchors = () => {
  const markdownFilePath = 'Engines/Godot/Basics/UIBasics/LayoutAndAnchors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Layout & Anchors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LayoutAndAnchors;
