import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
