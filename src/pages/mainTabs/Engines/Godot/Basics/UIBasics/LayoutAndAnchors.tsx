import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
