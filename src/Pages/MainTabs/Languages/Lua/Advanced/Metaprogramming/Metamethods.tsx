import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Metamethods = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Metaprogramming/Metamethods';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metamethods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metamethods;
