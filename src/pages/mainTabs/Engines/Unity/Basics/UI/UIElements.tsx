import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UIElements = () => {
  const markdownFilePath = 'Engines/Unity/Basics/UI/UIElements';

  return (
    <>
      <PageLayout>
        <PageTitle title="UI Elements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UIElements;
