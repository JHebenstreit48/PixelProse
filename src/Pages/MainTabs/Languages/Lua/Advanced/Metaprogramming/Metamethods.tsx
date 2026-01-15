import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Metamethods = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Metaprogramming/Metamethods';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Metamethods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metamethods;
