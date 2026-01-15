import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Metatables = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Metaprogramming/Metatables';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Metatables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metatables;
