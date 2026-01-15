import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Tsconfig = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Fundamentals/Tsconfig';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="tsconfig (Games)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tsconfig;
