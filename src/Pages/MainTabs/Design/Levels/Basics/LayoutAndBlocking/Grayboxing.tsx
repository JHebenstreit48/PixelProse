import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Grayboxing = () => {
  const markdownFilePath = 'Design/Levels/Basics/LayoutAndBlocking/Grayboxing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Grayboxing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Grayboxing;
