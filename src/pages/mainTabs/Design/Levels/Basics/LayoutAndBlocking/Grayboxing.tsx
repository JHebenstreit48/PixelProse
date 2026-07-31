import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
