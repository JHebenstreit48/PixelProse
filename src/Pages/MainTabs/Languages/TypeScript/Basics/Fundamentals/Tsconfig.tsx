import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
