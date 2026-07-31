import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Tsconfig = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Fundamentals/Tsconfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="tsconfig (Games)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tsconfig;
