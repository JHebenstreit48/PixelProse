import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
