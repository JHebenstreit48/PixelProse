import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Optimizations = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Performance/Optimizations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Optimizations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optimizations;
